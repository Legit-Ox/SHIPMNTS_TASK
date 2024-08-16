import React, { Fragment, useState } from "react";
import { Header, Footer, Navbar } from "../../layout";
import { Grid, IconButton, Tooltip } from "@mui/material";
import TextInput from "../../components/TextInput";
import Nestable from "react-nestable";
import AddCircleOutlineOutlinedIcon, {
  Add,
  InsertCommentOutlined,
} from "@mui/icons-material";
import uuid from "react-uuid";
import { formElements } from "../../utils/const";
const Index = () => {
  const initVal = formElements[0]?.value;

  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState("text");
  const addElement = () => {
    const data = {
      id: uuid(),
      value: null,
      type: formData,
      required: false,
    };
    setData((prevState) => [...prevState, data]);
    setFormData(initVal);
  };
  const items = data;

  const deleteEl = (id) => {
    setData((prevState) => prevState.filter((val) => val.id !== id));
  };

  //Function to add element at specific pos and return arr
  const addAfter = (elArray, index, newEl) => {
    return [...elArray.slice(0, index + 1), newEl, ...elArray.slice(index + 1)];
  };

  //Function to duplicate element
  const duplicateElement = (elId, elType) => {
    let elIdx = data.findIndex((el) => el.id === elId);
    let newEl = {
      id: uuid(),
      value: null,
      type: elType,
      required: false,
    };
    let newArr = addAfter(data, elIdx, newEl);
    setData(newArr);
  };

  //Function to handle sorting of elements
  const handleOnChangeSort = ({ items }) => {
    setData(items);
  };

  //Function to Handle Input Values
  const handleValue = (id, e) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        return { ...el, value: e.target.value };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Required
  const handleRequired = (id) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        return { ...el, required: !el.required };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Element Type
  const handleElType = (id, type) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        return { ...el, type: type };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Options
  const addOption = (id, newOption) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        const objVal = "options" in el ? el?.options : [];
        return { ...el, options: [...objVal, newOption] };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Date
  const handleDate = (id, dateVal) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        return { ...el, date: dateVal };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Handle Time
  const handleTime = (id, dateVal) => {
    let newArr = data.map((el) => {
      if (el.id == id) {
        return { ...el, time: dateVal };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Change Option Values
  const handleOptionValues = (elId, optionId, optionVal) => {
    let newArr = data.map((el) => {
      if (el.id == elId) {
        el?.options &&
          el?.options.map((opt) => {
            if (opt.id == optionId) {
              opt.value = optionVal;
            }
          });
        return el;
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  //Function to Delete Optin
  const deleteOption = (elId, optionId) => {
    let newArr = data.map((el) => {
      if (el.id == elId) {
        let newOptions =
          el?.options && el?.options.filter((opt) => opt.id != optionId);
        return { ...el, options: newOptions };
      } else {
        return el;
      }
    });
    setData(newArr);
  };

  const renderElements = ({ item }) => {
    switch (item.type) {
      case "text":
        return (
          <TextInput
            item={item}
            handleValue={handleValue}
            deleteEl={deleteEl}
            handleRequired={handleRequired}
            handleElType={handleElType}
            duplicateElement={duplicateElement}
          />
        );
      default:
        return <Fragment></Fragment>;
    }
  };
  return (
    <Fragment>
      <Grid container spacing={1} direction="row" justifyContent="center">
        <Grid item md={6}>
          <Header
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
          <Nestable
            items={items}
            renderItem={renderElements}
            maxDepth={1}
            onChange={handleOnChangeSort}
          />
        </Grid>
        <Grid item md={1}>
          <Tooltip title="Add Element" aria-label="add-element">
            <IconButton
              aria-label="add-element"
              onClick={addElement}
              sx={{ position: "sticky", top: 30 }}
            >
              <Add className="rounded-lg shadow-md text-violet-500" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Index;
