import dotProp from 'dot-prop-immutable';
import { SET_BOOKING, EDIT_BOOKING, REMOVE_BOOKING } from '../actions/booking';
import {
    pastHolymasses, comingHolymasses, hamammatElkoba, kobriElkoba, sarayaElkoba, manshetElsadr, zeiton,ezbetElnakhl,moleha,derElmalak, other, chooseRegion
} from '../../utilies/constants';

const initialState = {
    info: {
        members: [],
        events: [],
        checkout: []
    },
    member: {
        values: {
            id: ''
        },
        validationMsgs: {
            id: ''
        }
    },
    members: {
        values: {},
        validationMsgs: {},
        order: {}
    },
    pastEvents: [
        { value: false, label: comingHolymasses },
        { value: true, label: pastHolymasses }],
    regions: [
        { value: chooseRegion, label: chooseRegion, attr: { disabled: true } },
        { value: manshetElsadr, label: manshetElsadr },
        { value: derElmalak, label: derElmalak },
        { value: moleha, label: moleha },
        { value: kobriElkoba, label: kobriElkoba },
        { value: hamammatElkoba, label: hamammatElkoba },
        { value: sarayaElkoba, label: sarayaElkoba },
        { value: zeiton, label: zeiton },
        { value: ezbetElnakhl, label: ezbetElnakhl },
        { value: other, label: other }
    ],
    events: {
        values: {
            selected: ''
        },
        validationMsg: '',
        list: [],
        loading: false
    },
    footer: {
        leftButton: '',
        rightButton: ''
    },
    response: { code: '', status: '' },
    loading: false,
    redirectTo: '',
    noEventsPopup: false
}
const booking = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_BOOKING: {
            const { root, value } = action.payload;
            const existValue = dotProp.get(state, root)
            state = dotProp.set(state, root, { ...existValue, ...value })
            return { ...state };
        }

        case SET_BOOKING: {
            const { root, value } = action.payload;
            state = dotProp.set(state, root, value)
            return { ...state };
        }

        case REMOVE_BOOKING: {
            const { root } = action.payload;
            state = dotProp.delete(state, root)
            return { ...state };
        }
        default:
            return { ...state };
    }
};
export default booking;