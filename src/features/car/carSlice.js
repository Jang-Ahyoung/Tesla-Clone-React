import { createSlice } from "@reduxjs/toolkit";

// 초기화
const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name: "car",  // 슬라이스 이름 지정
    initialState, // 애플리케이션을 처음 시작할때 갖게되는 상태
    reducers: {} // 리덕스를 전략적으로 사용할 수 있게되는 기능
})

// 선택
export const selectCars = state => state.car.cars;
export default carSlice.reducer;