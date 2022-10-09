import { goodBye, helloWorld } from './index'

describe('Root file', () => {
  describe('goodBye', () => {
    it('should return result', () => {
      expect(goodBye()).toBe('Good Bye')
    })
  })

  describe('helloWorld', () => {
    it('should return result', () => {
      expect(helloWorld()).toBe('Hello World')
    })
  })
})
