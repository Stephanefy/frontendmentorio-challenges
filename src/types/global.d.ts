import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
    data: {
      email: string;
      role: string;
      password: string;
    };
  }
}