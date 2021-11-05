import Actions from '../constants/actions';
const initialState = {
    loading: false,
    tickets: [],
    error: null,
    selectedTicket: {},
    raffleLoading: false,
    raffleError: null,
};

export default function raffle(state = {}, action) {
    switch (action.type) {
      case Actions.LOAD_RAFFLE_TICKETS:
        return {
            ...state,
            loading: true,
            tickets: [],
            error: null
        };
      case Actions.LOAD_RAFFLE_TICKETS_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null,
            tickets: action.payload.data,
            selectedTicket: action.payload.data[0]
        };
    case Actions.LOAD_RAFFLE_TICKETS_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            tickets: []
        };
    case Actions.DRAW_TICKET:
        return {
            ...state,
            raffleLoading: true,
            raffleError: null
        };
    case Actions.DRAW_TICKET_SUCCESS:
        const selectedTicketType = state.selectedTicket.type;
        const ticketsArr = [...state.tickets];
        const selectedTicketIndex = ticketsArr.findIndex(ticket => ticket.type === selectedTicketType);
        if (selectedTicketIndex !== -1 && ticketsArr[selectedTicketIndex].count > 0) {
            ticketsArr[selectedTicketIndex].count -= 1;
        }
        return {
            ...state,
            raffleLoading: false,
            raffleError: null,
            tickets: ticketsArr
        };
case Actions.DRAW_TICKET_FAILURE:
    return {
        ...state,
        raffleLoading: false,
        raffleError: action.payload.error
    };
    case Actions.SET_SELECTED_TICKET:
        return {
            ...state,
            selectedTicket: action.payload
        };
      default:
        return state
    }
  }