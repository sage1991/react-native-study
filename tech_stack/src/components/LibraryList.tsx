import React, { Component, FC } from "react";
import { connect } from "react-redux";
import { LibraryState } from "../reducers/LibraryReducer";
import { StoreState } from "../reducers";
import { FlatList } from "react-native";
import { LibraryListItem } from "./LibraryListItem";
import * as actions from "../actions";


interface LibraryListProps {
  libraries: LibraryState[];
  selectLibrary: (id: number) => void;
  selection: null | number;
}

const LibraryList: FC<LibraryListProps> = (props) => {
  const { libraries, selectLibrary, selection } = props;

  return (
    <FlatList data={libraries}
              renderItem={({ item }) => {
                return <LibraryListItem expanded={item.id === selection}
                                        library={item}
                                        onPress={selectLibrary} />;
              }}
              keyExtractor={(data) => `${data.id}`} />
  );
}

const mapStateToProps = (state: StoreState) => ({ libraries: [ ...state.libraries ], selection: state.selection });
const ConnectedLibraryList = connect(mapStateToProps, actions)(LibraryList);

export { ConnectedLibraryList as LibraryList };
