import React, { useEffect, useState } from "react";
import { MySelect, MySelectTwo } from "../../elements/SelectMUI";
import { MyButtonTwo, MyTextField } from "../../elements/Forms";
import { MultiImgs } from "../UploadImg";
import "./Styles.scss";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useDispatch, useSelector } from "react-redux";
import { jalz_getAllCategories, createPublication } from "../../redux/action";
import { FormControlLabel, Switch } from "@mui/material";
import swal from "sweetalert";
 
const Form = () => {
  const [name, setName] = useState("");
  const [Detail, setDetail] = useState("");
  const [SomeDetail, setSomeDetail] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState(null);
  const [pictures, setImage] = useState(null);
  const [status, setStatus] = useState(true);

  const xDispatch = useDispatch();

  useEffect(() => {
    xDispatch(jalz_getAllCategories());
  }, [xDispatch]);

  const { rdcr_categories, user } = useSelector((state) => state);

  const aCategories = rdcr_categories?.map((pI) => {
    return {
      id: pI.id,
      name: pI.name,
    };
  });

  const aServices = rdcr_categories
    ?.map((pII) => {
      const x = pII.services;
      const oServices = x.map((pIII) => {
        return {
          id: pIII.id,
          name: pIII.name,
          fk_category: pII.id,
        };
      });
      return oServices;
    })
    .flat();
    // alert(JSON.stringify(user.id),"AAAAAAAA")
  const mSubmit = async (e) => {
    e.preventDefault();
  console.log(user.id, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

    const data = {
      state: status ? "Active" : "Inactive",
      title: name,
      pictures,
      detail: Detail,
      detail_resume: SomeDetail,
      price,
      userId: user.id,
      categoryId: category,
      services: subcategory,
    };
    if(user){
      try {
        const x = await xDispatch(createPublication(data));
        if(x.status === 200){
          swal("Perfect!", "Successfully Created Publication !", "success");
        } else {
          swal("Oops!", `Verify Your Entered Data`, "warning");
        }
      } catch (error) {
        swal("Oops!", "Something went wrong !", "error");
      }
    }


  };

  return (
    <main className="Comp-Form">

    <form onSubmit={mSubmit} className="createService-content">
      <h4>Add Publication</h4>
      <FormControlLabel
        sx={{ width: "100%" }}
        label="State"
        labelPlacement="start"
        control={
          <Switch
            checked={status}
            onChange={() => setStatus(!status)}
            color="success"
          />
        }
      />

      <MyTextField
        sx={{
          fieldset: {
            borderColor: "#fcdc3c !important",
          },
        }}
        label="Title"
        placeholder="Name of service"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <MySelect
        aFirst={aCategories}
        pHandleChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <MySelectTwo
        aSecond={aServices}
        pHandleChange={(e) => {
          setSubcategory(e.target.value);
        }}
        pDad={category}
      />

      <MyTextField
        sx={{
          fieldset: {
            borderColor: "#fcdc3c !important",
          },
        }}
        id="outlined-multiline-static"
        label="Detail Of Publication"
        multiline
        rows={4}
        placeholder="Tell us about your business"
        value={Detail}
        onChange={(e) => setDetail(e.target.value)}
      />

      <MyTextField
        sx={{
          fieldset: {
            borderColor: "#fcdc3c !important",
          },
        }}
        label="Description"
        placeholder="Description"
        value={SomeDetail}
        onChange={(e) => setSomeDetail(e.target.value)}
      />
      <MyTextField
        required
        sx={{
          fieldset: {
            borderColor: "#fcdc3c !important",
          },
        }}
        label="MIN PRICE"
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        inputProps={{
          min: "0",
          max: "9999",
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />

      <MultiImgs pSetStateImage={setImage} />

      <MyButtonTwo
        type="submit"
        variant="contained"
        endIcon={<LibraryAddIcon />}
      >
        Save Service
      </MyButtonTwo>
    </form>
    </main>
  );
};

export default Form;
