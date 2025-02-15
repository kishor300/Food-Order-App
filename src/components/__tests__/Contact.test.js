import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Run Before All Test Cases
beforeAll(() => {
  console.log('Before All');
})
// Run Before Each Test Case
beforeEach(() => {
  console.log('Before Each');
})
// Run After Each Test Case
afterEach(() => {
  console.log('After Each');
})
// Run After All Test Cases
afterAll(() => {
  console.log('After All');
})

test('should load Contact Component Component', () => {

  // Render Component in JSDOM to test
  render(<Contact />);
  const heading = screen.getByRole("heading") // find using Role

  // Assertion
  expect(heading).toBeInTheDocument();
})

test('should load button inside Contact Component', () => {

  render(<Contact />)
  // const button = screen.getByRole("button");  // find using Role

  const button = screen.getByText("Submit");  // find using Text

  expect(button).toBeInTheDocument();
})

test('should load input name inside Contact Component', () => {

  render(<Contact />)
  const inputName = screen.getByPlaceholderText("Name")  // find using placeholder

  // TestingLibraryElementError:
  // Unable to find an element with the placeholder text of: name (Case-sensitive)

  expect(inputName).toBeInTheDocument();
})

test('should load All Input Boxes from Contact Component', () => {

  render(<Contact />)

  // getByRole    --> for single element
  // getAllByRole --> for multiple elements

  // Quering
  const inputBoxes = screen.getAllByRole("textbox")  // returns Array of React Input Elements

  // console.log(inputBoxes.length);             // Output : 2 
  // console.log('InputBoxe : ', inputBoxes[0]); // First React Input Element Object

  // Assertion
  expect(inputBoxes.length).toBe(2);      // It should be 2 - True/Passed
  expect(inputBoxes.length).not.toBe(3);  // It should be 3 - True/Passed
})

/* Wrong Role `input`. (Following are Accessible Roles)
    TestingLibraryElementError: Unable to find an accessible element with the role "input"

    Here are the accessible roles:

      heading:

      Name "Contact Us":
      <h1
        class="font-bold text-3xl p-4 m-4"
      />

      --------------------------------------------------
      textbox:

      Name "":
      <input
        class="border-b-[1px] p-2 m-2 outline-none"
        placeholder="Name"
        type="text"
      />

      Name "":
      <input
        class="border-b-[1px] p-2 m-2 outline-none"
        placeholder="Message"
        type="text"
      />

      --------------------------------------------------
      button:

      Name "Submit":
      <button
        class="p-2 m-2 bg-orange-400 rounded-md"
      />

      --------------------------------------------------
*/

/* Output : React Input Element - 
    InputBoxe :  <ref *1> HTMLInputElement {
      '__reactFiber$300v7ndoocw': <ref *2> FiberNode {
        tag: 5,
        key: null,
        elementType: 'input',
        type: 'input',
        stateNode: [Circular *1],
        return: FiberNode {
          tag: 5,
          key: null,
          elementType: 'form',
          type: 'form',
          stateNode: [HTMLFormElement],
          return: [FiberNode],
          child: [Circular *2],
          sibling: null,
          index: 1,
          ref: null,
          refCleanup: null,
          pendingProps: [Object],
          memoizedProps: [Object],
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: 1,
          flags: 1048576,
          subtreeFlags: 1048576,
          deletions: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
          actualDuration: -0,
          actualStartTime: 3120.7709,
          selfBaseDuration: -0,
          treeBaseDuration: -0,
          _debugInfo: null,
          _debugOwner: [FiberNode],
          _debugNeedsRemount: false,
          _debugHookTypes: null
        },
        child: null,
        sibling: FiberNode {
          tag: 5,
          key: null,
          elementType: 'input',
          type: 'input',
          stateNode: [HTMLInputElement],
          return: [FiberNode],
          child: null,
          sibling: [FiberNode],
          index: 1,
          ref: null,
          refCleanup: null,
          pendingProps: [Object],
          memoizedProps: [Object],
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: 1,
          flags: 1048576,
          subtreeFlags: 0,
          deletions: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
          actualDuration: -0,
          actualStartTime: 3120.2065,
          selfBaseDuration: -0,
          treeBaseDuration: -0,
          _debugInfo: null,
          _debugOwner: [FiberNode],
          _debugNeedsRemount: false,
          _debugHookTypes: null
        },
        index: 0,
        ref: null,
        refCleanup: null,
        pendingProps: {
          type: 'text',
          className: 'border-b-[1px] p-2 m-2 outline-none',
          placeholder: 'Name'
        },
        memoizedProps: {
          type: 'text',
          className: 'border-b-[1px] p-2 m-2 outline-none',
          placeholder: 'Name'
        },
        updateQueue: null,
        memoizedState: null,
        dependencies: null,
        mode: 1,
        flags: 1048576,
        subtreeFlags: 0,
        deletions: null,
        lanes: 0,
        childLanes: 0,
        alternate: null,
        actualDuration: -0,
        actualStartTime: 3119.7445000000002,
        selfBaseDuration: -0,
        treeBaseDuration: -0,
        _debugInfo: null,
        _debugOwner: FiberNode {
          tag: 0,
          key: null,
          elementType: [Function: Contact],
          type: [Function: Contact],
          stateNode: null,
          return: [FiberNode],
          child: [FiberNode],
          sibling: null,
          index: 0,
          ref: null,
          refCleanup: null,
          pendingProps: {},
          memoizedProps: {},
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: 1,
          flags: 33554433,
          subtreeFlags: 1048576,
          deletions: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
          actualDuration: -0,
          actualStartTime: 3121.0004999999996,
          selfBaseDuration: -0,
          treeBaseDuration: -0,
          _debugInfo: null,
          _debugOwner: null,
          _debugNeedsRemount: false,
          _debugHookTypes: null
        },
        _debugNeedsRemount: false,
        _debugHookTypes: null
      },
      '__reactProps$300v7ndoocw': {
        type: 'text',
        className: 'border-b-[1px] p-2 m-2 outline-none',
        placeholder: 'Name'
      },
      '__reactEvents$300v7ndoocw': Set(1) { 'invalid__bubble' },
      value: [Getter/Setter],
      _valueTracker: {
        getValue: [Function: getValue],
        setValue: [Function: setValue],
        stopTracking: [Function: stopTracking]
      }
    }
 */

