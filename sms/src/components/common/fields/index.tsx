import ad_bs, { bs_ad_year, bs_ad_month } from './bs_ad';
import { checkbox, radio } from './Checkbox';
import { input, inputDisabled, inputNumber, password } from './Input';
import { searchBar } from './Search';
import {
  multipleSelect,
  monthSelect,
  select,
  selectDisabled,
  multiplemonthSelect,
} from './Select';
import { textarea } from './Textbox';
import { upload, uploadPhoto } from './Upload';
export const Checkbox = checkbox;
export const Radio = radio;
export const Input = input;
export const Password = password;
export const InputNumber = inputNumber;
export const InputDisabled = inputDisabled;
export const Textarea = textarea;
export const SelectDisabled = selectDisabled;
export const MonthSelect = monthSelect;

export const MultipleMonthSelect = multiplemonthSelect;

export const Select = select;
export const MultipleSelect = multipleSelect;
export const SearchBar = searchBar;
export const Upload = upload;
export const UploadPhoto = uploadPhoto;
//
export const DateInput = ad_bs;

//
export const MonthInput = bs_ad_month;
export const YearInput = bs_ad_year;
