//app base url

export class ApiRoute {
    static apiBaseUrl = process.env.API_BASE_URL;
  
    static login = this.apiBaseUrl + "/login_check";
  
    static travels = this.apiBaseUrl + "/travel/all";
  
    static travel = this.apiBaseUrl + "/travel/find";
  
    static createTravel = this.apiBaseUrl + "/travel/create";
  
    static createTicket = this.apiBaseUrl + "/ticket/tickets/create";
  
    static ticket = this.apiBaseUrl + "/ticket/per-travel/";
  
    static allTickets = this.apiBaseUrl + "/ticket/tickets/all";
  
    static travelStats = this.apiBaseUrl + "/travels/daily-stats";
  
    static downTicket = this.apiBaseUrl + "/ticket/";
  
    static reservation = this.apiBaseUrl + "/reservation";
  
    static confirmReservation = this.apiBaseUrl + "/reservation/manual-confirm";
  
    static buses = this.apiBaseUrl + "/bus/all";
  
    static createBus = this.apiBaseUrl + "/bus/create";
  
    static editBus = this.apiBaseUrl + "/bus/edit";
  
    static bus = this.apiBaseUrl + "/bus/find";
  
    static agency = this.apiBaseUrl + "/agency/all";
  
    static createAgency = this.apiBaseUrl + "/agency/create";
  
    static editAgency = this.apiBaseUrl + "/agency/edit";
  
    static InOperation = this.apiBaseUrl + "/caisse/ecriture-caisse/entrees";
  
    static OutOperation = this.apiBaseUrl + "/caisse/ecriture-caisse/sorties";
  
    static travelTakeOff = this.apiBaseUrl + "/travel/takeoff";
  
    static travelTakedropOff = this.apiBaseUrl + "/travel/drop";
  
    static desination = this.apiBaseUrl + "/destination";
  }
  
  export class ApiRouteSecond {
    static apiBasUrl = process.env.DASH_API_BASE_URL;
  
    static dashbordinfo = this.apiBasUrl + "/dashboard-info";
  }
  