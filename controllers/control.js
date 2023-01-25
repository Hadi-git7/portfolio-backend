import asyncHandler from "express-async-handler"

import Contact from '../models/contact.js'

// @ desc Get contact
// @route GET/api/contact
// @acess Private

const getContact = asyncHandler(async (req, res, next) => {
      try {
            const contact = await Contact.find();
            res.status(200).json(contact)
      } catch (err) {
            next(err)
      }
});

// @ desc Set contact
// @route POST/api/contact
// @acess Private

const setContact = asyncHandler(async (req, res, next) => {
      try {
            const { adress, email, linkedin, instagram, whatsapp } = req.body;

            if (!adress || !email || !instagram || !whatsapp || !linkedin) {
                  res.status(400);
                  throw new Error('Please add a text field');
            }
            const contact = await Contact.create({
                  adress: adress,
                  email: email,
                  instagram: instagram,
                  whatsapp: whatsapp,
                  linkedin: linkedin
            });

            res.status(201).json(contact);
      } catch (err) {
            next(err);
      }
});

// @ desc Update contact
// @route PUT/api/contact/:id
// @acess Private

const updateContact = asyncHandler(async (req, res, next) => {
      try {
            const { email, instagram, linkedin, whatsapp, adress } = req.body;
            const { id } = req.params;
            const contact = await Contact.findById(id);

            if (!contact) {
                  res.status(404);
                  throw new Error('Contact not found');
            }

            const updatedContact = await Contact.findByIdAndUpdate(id, {
                  adress: adress,
                  email: email,
                  instagram: instagram,
                  whatsapp: whatsapp,
                  linkedin: linkedin
            }, {
                  new: true,
            });
            res.status(200).json(updatedContact);
      } catch (err) {
            next(err);
      }
});

// @ desc Delete contact
// @route DELETE/api/contact/:id
// @acess Private

const deleteContact = asyncHandler(async (req, res, next) => {
      try {
            const contact = await Contact.findById(req.params.id);

            if (!contact) {
                  res.status(404);
                  throw new Error('Contact not found');
            }

            await contact.remove();

            res.status(200).json({ id: req.params.id });
      } catch (err) {
            next(err);
      }
});

export { getContact, setContact, updateContact, deleteContact }
