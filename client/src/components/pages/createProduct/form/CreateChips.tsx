import { StyleSheet } from "react-native";
import React from "react";
import { ChipsInput } from "components/shared/forms";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { allSelector } from "store/selectors/create-product.slice";
import { CreateProducerActions } from "store/actions";

const CreateChips = () => {
  const dispatch = useAppDispatch();
  const { options } = useAppSelector(allSelector);

  const onChipDelete = (idx: number) => {
    dispatch(CreateProducerActions.removeOption(idx));
  };

  const onChipAdd = (chip: string) => {
    dispatch(CreateProducerActions.addOption(chip));
  };

  return (
    <ChipsInput
      onChipDelete={onChipDelete}
      onChipAdd={onChipAdd}
      chips={options}
    />
  );
};

export default CreateChips;

const styles = StyleSheet.create({});
