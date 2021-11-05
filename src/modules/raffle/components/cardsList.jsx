import './cardsList.css';
import Card from './card';

function CardsList({ tickets }) {
    return (
        <div className='w-80 bg-white cardsList'>
            <div className='px-4 py-5 flex flex-row justify-between items-center border-b box-border'>
                <span>Get more tickets</span>
                <button className='rounded bg-purple-500 text-white py-2 px-5'>Buy</button>
            </div>
            <ul className='py-4 space-y-4 overflow-auto flex flex-col items-center cardsListContainer'>
                {tickets.map((ticket, ti) => {
                    return (
                        <Card key={`${ticket.type}_ti`} ticket={ticket} />
                    );
                })}
            </ul>
        </div>
    );
}

export default CardsList;