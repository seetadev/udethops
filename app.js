import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: '949c0082-a8b2-4766-964c-b152aa480494',
  redirectUri: 'https://github.com/seetadev/EthOps',
})

window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()

    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}

window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}