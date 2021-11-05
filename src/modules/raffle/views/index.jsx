import CardsList from '../components/cardsList';
import RaffleContainer from '../components/raffleContainer';
import { getRaffleTickets, setSelectedTicket, drawTicket } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Raffle() {
    // could use reselect here to extract out these selectors
    const tickets = useSelector(state => state.raffle.tickets || []);
    const totalTicketsCount = useSelector(state => (state.raffle.tickets || []).map(t => t.count).reduce((a, b) => a + b, 0));
    const selectedTicket = useSelector(state => state.raffle.selectedTicket || {});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRaffleTickets());
    }, []);
    console.log(tickets);
    return (
        <div className='p-10 flex flex-row justify-between'> 
            <CardsList tickets={tickets} />
            <RaffleContainer
                tickets={tickets}
                totalTicketsCount={totalTicketsCount}
                selectedTicket={selectedTicket}
                onDrawTicket={() => {
                    dispatch(drawTicket());
                }}
                onTicketSelect={(ticket) => {
                    dispatch(setSelectedTicket(ticket));
                }}
            />
        </div>
    );
}

export default Raffle;