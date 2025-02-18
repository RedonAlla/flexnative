/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-02-13 21:21:15
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-16 20:12:13
 * @ Description: The provided TypeScript code defines several type aliases that outline the structure and expected properties for an authentication context in a React application. 
 */


/**
 * This is a generic type alias used to define the properties expected in an authentication context.
 * 
 * It accepts a generic type parameter `TLoginRequest`,
 * which allows the `onLogin` method to be defined with a specific login request type.
 */
export type AuthContextProps<TLoginRequest, TRegisterForm> = {
  /**
   * Define the properties expected used to store authentication-related state properties.
   */
  state: AuthStateProps;

  /**
   * An optional function that handles user registration.
   * It takes a `registerForm` parameter of type `TRegisterForm` and returns a `Promise<void>`.
   * 
   * @param registerForm of type `TRegisterForm`
   * @returns `Promise<void>`
   */
  onRegister?: (registerForm: TRegisterForm) => Promise<void>;

  /**
   * An optional function for handling user logout, returning a `Promise<void>`.
   * 
   * @returns `Promise<void>`
   */
  onLogout?: () => Promise<void>;

  /**
   * A required function that handles user login.
   * It takes a `loginForm` parameter of type `TLoginRequest` (specified by the consumer of this type), and it returns a `Promise<void>`.
   * 
   * @param loginForm of type `TLoginRequest`
   * @returns `Promise<void>`
   */
  onLogin: (loginForm: TLoginRequest) => Promise<void>;

  /**
   * A required function that triggers authentication logic, returning a `Promise<void>`.
   * 
   * @returns `Promise<void>`
   */
  onAuthentication: () => Promise<void>;
};

/**
 * Defines the structure of the state object related to authentication.
 */
export type AuthStateProps = {
  /**
   * An optional string that may store session information or identifiers.
   */
  session?: string;

  /**
   * A boolean indicating whether the user is currently authenticated.
   */
  authenticated: boolean;
}

/**
 * These type definitions help ensure that the components interacting with authentication logic within the application have well-defined interfaces, improving type safety and readability across the codebase.
 */