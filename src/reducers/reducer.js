
const initialState = {
    floor_type_state: '',
    room_type_state: '',
    basementVisibility: false,
    firstFloorVisibility: false,
    secondFloorVisibility: false,
    atticRoomVisibility: false,
    placeVisibility: false
};


export const homeOrgReducer = (state = initialState, action) => {
    // var floorType;
    if (action.type === "FLOOR") {
        //action.payload should give floor_type
        // floorType = action.payload.toUpperCase();
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
        if (action.type === "PLACE") {
            return Object.assign({}, state, {
                placeVisibility: true
            })
        }
        return state;
    }
    switch (action.payload) {
        case "study": return Object.assign({}, state, {
            room_type_state: "study",
            placeVisibility: true
        })
        case "office": return Object.assign({}, state, {
            room_type_state: "office",
            placeVisibility: true
        })
        case "laundry": return Object.assign({}, state, {
            room_type_state: "laundry",
            placeVisibility: true
        })
        case "store": return Object.assign({}, state, {
            room_type_state: "store",
            placeVisibility: true
        })
        case "kitchen": return Object.assign({}, state, {
            room_type_state: "kitchen",
            placeVisibility: true
        })
        case "living": return Object.assign({}, state, {
            room_type_state: "living",
            placeVisibility: true
        })
        case "dining": return Object.assign({}, state, {
            room_type_state: "dining",
            placeVisibility: true
        })
        case "sunroom": return Object.assign({}, state, {
            room_type_state: "sunroom",
            placeVisibility: true
        })
        case "mudroom": return Object.assign({}, state, {
            room_type_state: "mudroom",
            placeVisibility: true
        })
        case "garage": return Object.assign({}, state, {
            room_type_state: "garage",
            placeVisibility: true
        })
        case "bedroom1": return Object.assign({}, state, {
            room_type_state: "bedroom1",
            placeVisibility: true
        })
        case "bedroom2": return Object.assign({}, state, {
            room_type_state: "bedroom2",
            placeVisibility: true
        })
        case "bedroom3": return Object.assign({}, state, {
            room_type_state: "bedroom3",
            placeVisibility: true
        })
        case "attic_store": return Object.assign({}, state, {
            room_type_state: "attic_store",
            placeVisibility: true
        })
        default: return state;
    }
}
