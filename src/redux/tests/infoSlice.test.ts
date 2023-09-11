import infoReducer from "../infoSlice";
import { fetchBooks, loadingMoreBooks } from "../action-creator";

const initialState = {
  error: null,
  loading: false,
  totalItems: 0,
};

describe("infoSlice", () => {
  it("testing extra reducers fetchBooks pending", () => {
    const state = infoReducer(initialState, fetchBooks.pending);
    expect(state.loading).toBe(true);
  });
  it("testing extra reducers fetchBooks fulfilled", () => {
    const state = infoReducer(
      initialState,
      fetchBooks.fulfilled([[], 18], "", "")
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe("");
    expect(state.totalItems).toEqual(18);
  });
  it("testing extra reducers fetchBooks rejected", () => {
    const state = infoReducer(initialState, fetchBooks.rejected);
    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
  });

  it("testing extra reducers loadingMoreBooks pending", () => {
    const state = infoReducer(initialState, loadingMoreBooks.pending);
    expect(state.loading).toBe(true);
  });
  it("testing extra reducers loadingMoreBooks fulfilled", () => {
    const state = infoReducer(initialState, loadingMoreBooks.fulfilled);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });
  it("testing extra reducers loadingMoreBooks rejected", () => {
    const state = infoReducer(initialState, loadingMoreBooks.rejected);
    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
  });
});
