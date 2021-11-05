import { takeLatest, delay, put, select, all } from 'redux-saga/effects';
import Actions from '../constants/actions';
import RaffleTickets from '../constants/raffleTickets';

const getSelectedTicket = state => state.raffle.selectedTicket || {};

function* loadRaffleTickets(action) {
    try {
        //simulate api call
        yield delay(1000);
        yield put({ 
            type: Actions.LOAD_RAFFLE_TICKETS_SUCCESS, 
            payload: RaffleTickets
        });
    } catch (error) {
        yield put({ type: Actions.LOAD_RAFFLE_TICKETS_FAILURE, payload: action.payload });
    }
}

function* drawTicket(action) {
    try {
        //simulate api call
        yield delay(1000);
        const selectedTicket = yield select(getSelectedTicket);
        if (selectedTicket.type === 'silver') {
            yield put({ 
                type: Actions.DRAW_TICKET_SUCCESS,
                payload: {}
            });    
        } else {
            throw new Error('Aww! Better luck next time.');
        }
    } catch (error) {
        yield put({
            type: Actions.DRAW_TICKET_FAILURE,
            payload: {
                error
            }
        })
    }
}

export default function* raffleSaga() {
  yield all([
    takeLatest(Actions.LOAD_RAFFLE_TICKETS, loadRaffleTickets),
    takeLatest(Actions.DRAW_TICKET, drawTicket)
  ]);
}
