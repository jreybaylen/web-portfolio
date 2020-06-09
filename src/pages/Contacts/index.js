import React from 'react'

import { ContactItem } from './ContactItem'

import { contacts } from './content'
import { Section, ItemContainerList, Label } from './styles'

function Contacts () {
    const handleOpenURL = (url) => window.open(url)
    const contactsElement = (
        <Section id="section-contacts">
            <Label className="bg-text text-center">Contacts</Label>
            <ItemContainerList>
                { contacts && contacts.map(
                    (contact) => (
                        <ContactItem
                            item={ contact }
                            key={ contact.key }
                            onClick={ handleOpenURL }
                        />
                    )
                ) }
            </ItemContainerList>
        </Section>
    )

    return contactsElement
}

export { Contacts }