import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Modal, Form, Button } from 'react-bootstrap';
import { StoreContext } from "../../store/StoreContext"
import * as _ from 'lodash'

export default function FormEditWork () {
    const { changes, setModalContext } = useContext(StoreContext)
    const { is, items } = changes
    // const [ edit, setEdit ] = useState( items )
    const STATUS_TODO = [
        {
            status: 'done', value: 1
        },
        {
            status: 'new', value: 2
        },
        {
            status: 'doing', value: 3
        },
        {
            status: 'pedding', value: 4
        }
    ]
    const status = _.filter(STATUS_TODO, i => i.status === items?.status)

    let defaultValues = {
        name: items?.name,
        status: status[0]?.value,
    };
    const { handleSubmit, register } = useForm({ defaultValues });
    const handleOk = (data, id) => {
       console.log(data, id);
    }
    console.log(status[0]?.value);
    return (
        <>
            <Modal
                animation={false}
                size="xs"
                show={is}
                onHide={() => setModalContext()}
                aria-labelledby="example-modal-sizes-title-lg" 
            >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Modal Update
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(data => handleOk(data, items?.id))}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        type="text"
                        {...register('name', { required: "This is required message" })}
                        />
                    </Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" {...register('status', { required: "This is required message" })}>
                    {
                        _.map(STATUS_TODO, i => {
                            return (

                                <option key={i.value} value={i.value}>{i.status}</option>
                            )

                        })
                    }
                    </Form.Control>
                    <Button type="submit" className="mt-3 d-flex" variant="outline-success">Success</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </>
    )
}