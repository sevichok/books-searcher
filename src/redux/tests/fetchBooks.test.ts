import { fetchBooks } from "../action-creator";

describe("fetchBooks", () => {
  it("testing fetchBooks thunk", async () => {
    const mock = "Marvel";
    const dispatch = jest.fn();
    const thunk = fetchBooks(mock);

    await thunk(dispatch, () => ({}), thunk);

    const { calls } = dispatch.mock;
    const [pendingCall, fulfilledCall] = calls;

    expect(calls).toHaveLength(2);
    expect(pendingCall[0].type).toBe("fetchingBooks/pending");
    expect(fulfilledCall[0].type).toBe("fetchingBooks/fulfilled");
    expect(fulfilledCall[0].meta.arg).toBe(mock);
  });
});
