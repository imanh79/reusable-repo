import base_url from "../base_url";

class UserServices {
  GetUserInfo(data: any) {
    return base_url.post("/getinfo", data);
  }
}

export default new UserServices();
