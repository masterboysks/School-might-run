import { bs_ad_day, bs_ad_month, bs_ad_year } from "./bs_ad";
import { checkbox, radio } from "./Checkbox";
import { input, inputDisabled, inputNumber, password } from "./Input";
import { searchBar } from "./Search";
import {
  multipleSelect,
  MultipleSelectNew,
  select,
  selectDisabled,
} from "./Select";
import { textarea } from "./Textbox";
import { upload, uploadPhoto } from "./Upload";

// checkbox new
export const Checkbox = checkbox;
// Radio bth new
export const Radio = radio;

// Input field new

export const Input = input;
// password new
export const Password = password;
export const InputNumber = inputNumber;
// Input disabled field
export const InputDisabled = inputDisabled;
// select disabled
export const SelectDisabled = selectDisabled;
// Select

export const Select = select;
// Multiple select
export const MultipleSelect = MultipleSelectNew;
export const SearchBar = searchBar;

export const Upload = upload;
export const UploadPhoto = uploadPhoto;

export const Textarea = textarea;
export const MonthInput = bs_ad_month;
export const YearInput = bs_ad_year;
export const YearDay = bs_ad_day;