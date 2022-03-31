import http from "../http-common";

class FlexMoneyDataService {
  postDetail() {
    return http.post("/postPaymentDetail");
  }
}

export default new FlexMoneyDataService();
