import './raffleContainer.css';
import TicketsDropdown from './ticketsDropdown';

function RaffleContainer({ tickets, totalTicketsCount, onTicketSelect, onDrawTicket, selectedTicket }) {
    return (
        <div className='ml-8 flex-1 raffleContainer text-center p-5'>
            <h3 className='text-lg text-bold'>Collectors Event</h3>
            <h5 className='text-xs text-thin'>Participate and win high quality curated NFTs</h5>
            <div className='border-dashed border border-gray-200 h-20 mt-10'>
                <div>Placeholder Img</div>
                <span>Drag a ticket or use the button below to draw your tickets</span>
            </div>
            <div className='flex flex-row justify-between px-4 py-5'>
                <div>
                    <h4>Draw Tickets</h4>
                    <h5>{totalTicketsCount} <span>tickets found</span></h5>
                    <p>Open your tickets and get a chance to win $1000 worth of high quality NFTs
                        <span> Learn more! </span>
                    </p>
                </div>
                <div>
                    <TicketsDropdown selectedTicket={selectedTicket} options={tickets} onChange={onTicketSelect} />
                    <button onClick={onDrawTicket} className='bg-purple-600 text-white rounded-sm w-60 text-center py-4'>Draw Tickets</button>
                </div>
            </div>
        </div>
    );
}

export default RaffleContainer;