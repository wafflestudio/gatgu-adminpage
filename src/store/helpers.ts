export const reducerUtils = {
  // 초기 상태. 초기 data 값은 기본적으로 null 이지만
  // 바꿀 수도 있습니다.
  initial: (initialData?: any) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만
  // 따로 값을 지정하면 null 로 바꾸지 않고 다른 값을 유지시킬 수 있습니다.
  loading: (prevState?: any) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  success: (payload: any) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  error: (error: any) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
