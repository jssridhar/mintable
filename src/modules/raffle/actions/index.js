import Actions from '../constants/actions';

export function getRaffleTickets(payload) {
    return {
        type: Actions.LOAD_RAFFLE_TICKETS,
        payload
    }
}

export function setSelectedTicket(payload) {
    return {
        type: Actions.SET_SELECTED_TICKET,
        payload
    }
}

export function drawTicket(payload) {
    return {
        type: Actions.DRAW_TICKET,
        payload
    };
}