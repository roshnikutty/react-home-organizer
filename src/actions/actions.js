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
export const first_floor = (room) => ({
    type: "FIRST_FLOOR",
    payload: room
});

export const SECOND_FLOOR = "SECOND_FLOOR";
export const second_floor = (room) => ({
    type: "SECOND_FLOOR",
    payload: room
});

export const ATTIC = "ATTIC";
export const attic = (room) => ({
    type: "ATTIC",
    payload: room
});