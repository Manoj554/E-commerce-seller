import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Addcategories from '../../contents/Categories/AddCategories';
import convertToBase64 from '../../helper/convertToBase64';
import { addNewCategoryAction } from '../../redux/actions';


const AddNewCategory = () => {
    const initialFormData = { categoryName: '', parentId: '', categoryImage: '' };
    const [fileName, setFileName] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const dispatch = useDispatch();

    const handleFileUpload = async (e) => {
        let file = e.target.files[0];
        let fileInfo = await convertToBase64(file);
        setFormData({ ...formData, categoryImage: fileInfo.base64 });
        setFileName(fileInfo.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCategoryAction(formData, setFormData, initialFormData));
    }

    return (
        <div>
            <Addcategories
                fileName={fileName}
                setFormData={setFormData}
                formData={formData}
                handleFileUpload={handleFileUpload}
                handleSubmit={handleSubmit}
                title="Add"
            />
        </div>
    )
}

export default AddNewCategory;