import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ErrorMessages from "./ErrorMessages";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput onBlur={() => setFieldTouched(name)} {...otherProps} onChangeText={handleChange(name)} />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
