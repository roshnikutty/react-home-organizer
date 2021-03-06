export const FLOOR = "FLOOR";
export const Floor = (floor_type) => ({
    type: "FLOOR",
    payload: floor_type                  //values here: na, Basement, First, Second, Attic
})

export const BASEMENT = "BASEMENT";
export const Basement = (room) => ({
    type: "BASEMENT",
    payload: room                       //values here are from BasementRoom component's dropdown
});

export const FIRST_FLOOR = "FIRST_FLOOR";
export const First_floor = (room) => ({
    type: FIRST_FLOOR,
    payload: room
});

export const SECOND_FLOOR = "SECOND_FLOOR";
export const Second_floor = (room) => ({
    type: SECOND_FLOOR,
    payload: room
});

export const ATTIC = "ATTIC";
export const Attic = (room) => ({
    type: ATTIC,
    payload: room
});

export const PLACE = "PLACE";
export const Place_Action = (place_value) => ({
    type: PLACE,
    payload: place_value
})

export const ADD_ITEM = "ADD_ITEM";
export const Add_Item_to_state = (stuff_to_add) => ({
    type: ADD_ITEM,
    payload: stuff_to_add
})

export const SHOW = "SHOW";
export const Show = (homeOrg) => ({
    type: SHOW,
    payload: homeOrg
})

export const DELETE = "DELETE";
export const Delete = (indexOfItemToDelete) => ({
    type: DELETE,
    payload: indexOfItemToDelete
})

export const SEARCH = "SEARCH";
export const Search_Action = (search_term) => ({
    type: SEARCH,
    payload: search_term
})