import React from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

const CommonForm = ({
      formControls,
      formData,
      setFormData,
      onSubmit,
      buttonText
}) => {
      const renderInputsByComponentsType = (getControlItems) => {
            let element = null;
            const value = formData[getControlItems.name];

            switch (getControlItems.componentType) {
                  case 'input':
                        element = (
                              <Input
                                    type={getControlItems.type}
                                    name={getControlItems.name}
                                    placeholder={getControlItems.placeholder}
                                    id={getControlItems.name}
                                    min={getControlItems.type === 'number' ? '0' : undefined}
                                    max={getControlItems.type === 'number' ? '9999999999' : undefined}
                                    className={getControlItems.type === 'number' ? 'hide-number-arrows' : ''}
                                    value={value}
                                    onChange={(e) => setFormData({
                                          ...formData, [getControlItems.name]: e.target.value
                                    })}
                              />
                        )
                        break;
                  case 'select':
                        element = (
                              <Select
                                    value={value}
                                    onValueChange={(value) => setFormData({
                                          ...formData, [getControlItems.name]: value
                                    })}
                              >
                                    <SelectTrigger className='w-full'>
                                          <SelectValue
                                                placeholder={getControlItems.label}
                                          />
                                    </SelectTrigger>
                                    <SelectContent>
                                          {
                                                getControlItems.options &&
                                                      getControlItems.options.length > 0 ?
                                                      getControlItems.options.map((optionItem) => (
                                                            <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>
                                                      )) : null
                                          }
                                    </SelectContent>
                              </Select>
                        )
                        break;
                  case 'textarea':
                        element = (
                              <Textarea
                                    name={getControlItems.name}
                                    placeholder={getControlItems.placeholder}
                                    id={getControlItems.name}
                                    value={value}
                                    onChange={(e) => setFormData({
                                          ...formData, [getControlItems.name]: e.target.value
                                    })}
                              />
                        )
                        break;
                  default:
                        element = (
                              <Input
                                    type={getControlItems.type}
                                    name={getControlItems.name}
                                    placeholder={getControlItems.placeholder}
                                    id={getControlItems.name}
                                    value={value}
                                    onChange={(e) => setFormData({
                                          ...formData, [getControlItems.name]: e.target.value
                                    })}
                              />
                        );
                        break;
            }
            return element;
      };

      return (
            <form onSubmit={onSubmit}>
                  <div className='flex flex-col gap-3'>
                        {
                              formControls.map((controlItems) => (
                                    <div
                                          key={controlItems.name}
                                          className='grid w-full gap-1.5'
                                    >
                                          <Label className='mb-1'>{controlItems.label} :</Label>
                                          {
                                                renderInputsByComponentsType(controlItems)
                                          }
                                    </div>
                              ))
                        }
                  </div>
                  <Button
                        type='submit'
                        className='w-full mt-3 cursor-pointer'
                  >
                        {buttonText ? buttonText : 'Submit'}
                  </Button>
            </form>
      );
};

export default CommonForm;
