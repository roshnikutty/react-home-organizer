
const initialState = {
    floor_type_state: '',
    basementVisibility: false,
    firstFloorVisibility: false,
    secondFloorVisibility: false,
    atticRoomVisibility: false
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
    }
    return state;
};

