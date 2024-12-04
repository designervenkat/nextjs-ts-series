### React Query is a powerful tool for managing server state in React applications.

#### Polling with React Query enables continuous data fetching at specified intervals, ensuring that the application's data remains fresh and up-to-date.

#### What is polling in React Query?

#### Polling is a technique where a data fetching operation is executed repeatedly at regular intervals. This is particularly useful in applications where real-time data updates are crucial. React Query's polling mechanism is straightforward to implement and manage.

```JS
refetchInterval: 2000, // Poll every 2000ms
refetchIntervalInBackground: true, // Set this to true to continue polling even when the browser window is not focused.
```

### Fetch data onClick event

```js
enable = false // Step One = set to false
{ refetch } = useQuery() // Step two import refetch
// Step three attach to button
```

### useMutations

#### useMutation is a hook provided by React Query that helps you handle server-side mutations like POST, PUT, DELETE requests, etc.

#### Beyond just making the request, it provides out-of-the-box functionalities for managing local UI state, handling optimistic updates, and even retrying failed mutations.

### Notification Success and Errors

```js
isSuccess and isError
```
