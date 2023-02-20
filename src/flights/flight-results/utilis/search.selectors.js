export const searchRequestSelector = (state) => state.flightsInfo.searchRequest;
export const arrivalsListSelector = (state) => state.flightsInfo.arrivals;
export const departuresListSelector = (state) => state.flightsInfo.departures;
export const flightsListSelector = (state) => state.flightsInfo.flightsList;
export const searchDirectionSelector = (state) => state.flightsInfo.direction;
export const dateSelector = (state) => state.flightsInfo.date;
export const isPendingSelector = (state) => state.flightsInfo.isPending;
export const errorSelector = (state) => state.flightsInfo.error;
