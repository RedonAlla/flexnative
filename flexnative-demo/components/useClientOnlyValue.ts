// This function is web-only as native doesn't currently support server (or build-time) rendering.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  console.log('server: ', server)
  console.log('client: ', client)
  return client;
}
