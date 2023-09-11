import { bookDataFetch } from "../action-creator";

describe("bookDataFetch", () => {
  it('testing bookDataFetch thunk', async () => {
    const mockResult = {
      title: "Panthers, Hulks and Ironhearts",
      authors: ["Jeffrey A. Brown"],
      publishedDate: "2021-01-15",
      language: "en",
      subtitle: "Marvel, Diversity and the 21st Century Superhero",
      categories: [
        "Literary Criticism / General",
        "Literary Criticism / Comics & Graphic Novels",
        "Social Science / Popular Culture",
        "Social Science / Ethnic Studies / American / General",
        "Social Science / Race & Ethnic Relations",
        "Social Science / Media Studies",
        "Social Science / Ethnic Studies / American / Asian American & Pacific Islander Studies",
        "Social Science / Ethnic Studies / Caribbean & Latin American Studies",
        "Social Science / Ethnic Studies / American / African American & Black Studies",
      ],
    };
    const dispatch = jest.fn();
    const thunk = bookDataFetch("Y4ESEAAAQBAJ");

    await thunk(dispatch, () => ({}), thunk);

    const { calls } = dispatch.mock;
    const [pendingCall, fulfilledCall] = calls;

    expect(calls).toHaveLength(2);
    expect(pendingCall[0].type).toBe("bookDataFetch/pending");
    expect(fulfilledCall[0].type).toBe("bookDataFetch/fulfilled");
    expect(fulfilledCall[0].payload.volumeInfo).toMatchObject(mockResult);
  });
});
