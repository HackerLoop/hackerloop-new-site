export const state = () => ({
  mainVideoPlaying: false
})

export const mutations = {
  setMainVideoPlaying (state, bool) {
    state.mainVideoPlaying = bool
  }
}

export const getters = {
  mainVideoPlaying: state => state.mainVideoPlaying
}
