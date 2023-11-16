/* eslint-disable */
// @ts-nocheck

// Generic Types is a powerful feature of TypeScript
// It allows us to define functions which, in addition to parameters,
// takes in one or more Types as arguments which we can use
//
// The syntaxt is similar to how a function takes in parameters
// normal function
function standardFunction(parm1: string, param2: number): string {}
// The same function but with an added type parameter
function standardFunction<TypeParam>(parm1: string, param2: number): TypeParam {}
// Works with muliple type parameter as well
function standardFunction<TypeParam1, TypeParam2>(parm1: string, param2: number): TypeParam1 | TypeParam2 {}


// You will see this quite often in async functions (all promises are)
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// It is also quite handy when it comes to Typing the response from APIs
// Most of the time these types are created by those developing the backend system
// and made available through a package, Software Development Kit (SDK), or some other means.
// But for simple usecases we can define these by hand
type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type PersonObject = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Array<User>
  support: {
    url: string
    text: string
  }
}

type Resource = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

type ResourceObject = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Array<Resource>
  support: {
    url: string,
    text: string
  }
}

// This allows us to create generic functions which returns
// Typed responses from APIs
async function fetchData<ApiResponse>(url: string) {
  try {
    const response = await fetch(url)
    const data = await response.json() as ApiResponse
    return data
  } catch (error) {
    return "Fetch failed"
  }
}


async function main() {
  // Simply pass in the type as an argument along with the normal URL
  // And the return value will be of the type we pass in
  const firstExample = await fetchData<PersonObject>("https://reqres.in/api/users?page=2")
  if(firstExample === "Fetch failed") {
    throw new Error("Failing")
  }

  firstExample.data.forEach((user) => {
    console.log(user)
  })

  // Since it's generic we can reuse the same function with different types
  const secondExample = await fetchData<ResourceObject>("https://reqres.in/api/unknown")
  if (secondExample === "Fetch failed") {
    throw new Error("Failing")
  }
  
  secondExample.data.forEach((resource) => {
    console.log(resource)
  })
}

main()