type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string 
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address} and your state is ${user.address.state}.`
}

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  address: {
    city: 'New York',
    state: 'NY'
  }
}

const massage = showWelcomeMessage(user)