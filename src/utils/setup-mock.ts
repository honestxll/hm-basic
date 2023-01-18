const useMock = import.meta.env.VITE_APP_USE_MOCK as string

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  console.log('useMock', useMock, 'mock', mock)

  if (useMock === 'true' || mock === true) setup()
}

export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    message: '请求成功',
    code: 200,
  }
}

export const failResponseWrap = (data: unknown, message: string, code = 500) => {
  return {
    data,
    status: 'fail',
    message,
    code,
  }
}
