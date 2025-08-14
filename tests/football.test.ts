import { formatMatchTime, getMatchStatus, validateEmail } from "../src/utils/football"

describe("Football Utilities", () => {
  describe("formatMatchTime", () => {
    test("should format time correctly", () => {
      expect(formatMatchTime("16:00")).toBe("16h00")
      expect(formatMatchTime("18:30")).toBe("18h30")
    })
  })

  describe("getMatchStatus", () => {
    test("should return upcoming for future matches", () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)
      const dateStr = futureDate.toISOString().split("T")[0]

      expect(getMatchStatus(dateStr, "16:00")).toBe("upcoming")
    })
  })

  describe("validateEmail", () => {
    test("should validate email correctly", () => {
      expect(validateEmail("test@example.com")).toBe(true)
      expect(validateEmail("invalid-email")).toBe(false)
      expect(validateEmail("test@")).toBe(false)
      expect(validateEmail("@example.com")).toBe(false)
    })
  })
})
