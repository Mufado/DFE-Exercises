import api from "../../../service/shared/api";

const getData = async () => {
  return await api.get('/search?query=');
}

describe("Input", function () {
  test("Must get objects even if not receive input value", function () {
    const response = getData();
    expect(response).not.toBeNull();
  });
});