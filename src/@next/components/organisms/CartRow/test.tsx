import { mount, shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { IconButton, Icon } from "@components/atoms";

import { CartRow } from ".";
import { DEFAULT_PROPS } from "./fixtures";

describe("<CartRow />", () => {
  it("exists", () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const onSubstractMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onAdd={onAddMock}
        onSubstract={onSubstractMock}
      />
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("should call mock when clicking on trash icon", () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const onSubstractMock = jest.fn();
    const wrapper = shallow(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onAdd={onAddMock}
        onSubstract={onSubstractMock}
      />
    );

    wrapper
      .find(IconButton)
      .findWhere(wrapper => wrapper.props().name === "trash")
      .simulate("click");

    expect(onRemoveMock).toHaveBeenCalled();
  });

  it("should call mock when clicking on substract quantity icon", () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const onSubstractMock = jest.fn();
    const wrapper = mount(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onAdd={onAddMock}
        onSubstract={onSubstractMock}
      />
    );

    wrapper
      .find(Icon)
      .findWhere(wrapper => wrapper.props().name === "horizontal_line")
      .simulate("click");

    expect(onSubstractMock).toHaveBeenCalled();
  });

  it("should call mock when clicking on add more quantity icon", () => {
    const onRemoveMock = jest.fn();
    const onAddMock = jest.fn();
    const onSubstractMock = jest.fn();
    const wrapper = mount(
      <CartRow
        {...DEFAULT_PROPS}
        onRemove={onRemoveMock}
        onAdd={onAddMock}
        onSubstract={onSubstractMock}
      />
    );

    wrapper
      .find(Icon)
      .findWhere(wrapper => wrapper.props().name === "plus")
      .simulate("click");

    expect(onAddMock).toHaveBeenCalled();
  });
});