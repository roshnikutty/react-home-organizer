import { SHOW, DELETE } from '../actions/actions';

const initialState = {
    floor_type_state: '',
    room_type_state: '',
    place: '',
    item: '',
    basementVisibility: false,
    firstFloorVisibility: false,
    secondFloorVisibility: false,
    atticRoomVisibility: false,
    placeVisibility: false,
    itemVisibility: false
};


export const homeOrgReducer = (state = initialState, action) => {
    if (action.type === "FLOOR") {
        // reducer function conditions for floor types
        if (action.payload === "Basement") {
            return Object.assign({}, state, {
                floor_type_state: "Basement",
                basementVisibility: true,
                firstFloorVisibility: false,
                secondFloorVisibility: false,
                atticRoomVisibility: false
            })
        }
        if (action.payload === "First") {
            return Object.assign({}, state, {
                floor_type_state: "First",
                basementVisibility: false,
                firstFloorVisibility: true,
                secondFloorVisibility: false,
                atticRoomVisibility: false
            })
        }
        if (action.payload === "Second") {
            return Object.assign({}, state, {
                floor_type_state: "Second",
                basementVisibility: false,
                firstFloorVisibility: false,
                secondFloorVisibility: true,
                atticRoomVisibility: false
            })
        }
        if (action.payload === "Attic") {
            return Object.assign({}, state, {
                floor_type_state: "Attic",
                basementVisibility: false,
                firstFloorVisibility: false,
                secondFloorVisibility: false,
                atticRoomVisibility: true
            })
        }
    }
    else if (action.type === "PLACE") {
        return Object.assign({}, state, {
            place: action.payload
        })
    }
    else if (action.type === "ADD_ITEM") {
        return Object.assign({}, state, {
            item: action.payload
        })
    }


    // reducer function conditions for room types
    switch (action.payload) {
        case "study": return Object.assign({}, state, {
            room_type_state: "study",
            placeVisibility: true,
            itemVisibility: true
        })
        case "office": return Object.assign({}, state, {
            room_type_state: "office",
            placeVisibility: true,
            itemVisibility: true
        })
        case "laundry": return Object.assign({}, state, {
            room_type_state: "laundry",
            placeVisibility: true,
            itemVisibility: true
        })
        case "store": return Object.assign({}, state, {
            room_type_state: "store",
            placeVisibility: true,
            itemVisibility: true
        })
        case "kitchen": return Object.assign({}, state, {
            room_type_state: "kitchen",
            placeVisibility: true,
            itemVisibility: true
        })
        case "living": return Object.assign({}, state, {
            room_type_state: "living",
            placeVisibility: true,
            itemVisibility: true
        })
        case "dining": return Object.assign({}, state, {
            room_type_state: "dining",
            placeVisibility: true,
            itemVisibility: true
        })
        case "sunroom": return Object.assign({}, state, {
            room_type_state: "sunroom",
            placeVisibility: true,
            itemVisibility: true
        })
        case "mudroom": return Object.assign({}, state, {
            room_type_state: "mudroom",
            placeVisibility: true,
            itemVisibility: true
        })
        case "garage": return Object.assign({}, state, {
            room_type_state: "garage",
            placeVisibility: true,
            itemVisibility: true
        })
        case "bedroom1": return Object.assign({}, state, {
            room_type_state: "bedroom1",
            placeVisibility: true,
            itemVisibility: true
        })
        case "bedroom2": return Object.assign({}, state, {
            room_type_state: "bedroom2",
            placeVisibility: true,
            itemVisibility: true
        })
        case "bedroom3": return Object.assign({}, state, {
            room_type_state: "bedroom3",
            placeVisibility: true,
            itemVisibility: true
        })
        case "attic_store": return Object.assign({}, state, {
            room_type_state: "attic_store",
            placeVisibility: true,
            itemVisibility: true
        })
        default: return state;
    }

}


//get all the previous (...state) and the latest(latest is action.payload) displayed
export const homeOrgArrayReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW:
            return [...state, action.payload];
        case DELETE:
            let index = action.payload;
            console.log("DELETE in action");
            state = [].concat(state.slice(0, index), state.slice(index + 1));
            return state;
        default: return state;
    }

}