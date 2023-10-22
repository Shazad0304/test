import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './access pages/Login'
import BusinessRegister from './access pages/BusinessRegister'
import PersonRegister from './access pages/PersonRegister'
import PasswordReset from './access pages/PasswordReset'
import Dashboard from './dashboard pages/Dashboard'
import BusinessRegistration from './dashboard pages/BusinessRegistration'
import BusinessRenewal from './dashboard pages/BusinessRenewal'
import LabourCard from './dashboard pages/LabourCard'
import EjariApplication from './dashboard pages/EjariApplication'
import OfferLetter from './dashboard pages/OfferLetter'
import LabourInsurance from './dashboard pages/LabourInsurance'
import LabourFee from './dashboard pages/LabourFee'
import EntryPermit from './dashboard pages/EntryPermit'
import ChangeStatus from './dashboard pages/ChangeStatus'
import HealthInsurance from './dashboard pages/HealthInsurance'
import MedicalExaminationTyping from './dashboard pages/MedicalExaminationTyping'
import EmiratesIDTyping from './dashboard pages/EmiratesIDTyping'
import StampingVisa from './dashboard pages/StampingVisa'
import FinalContractSubmission from './dashboard pages/FinalContractSubmission'
import TransactionList from './dashboard pages/TransactionList'
import TopUp from './dashboard pages/TopUp'
import FormFees from './dashboard pages/FormFees'
import Agents from './dashboard pages/Agents'
import Admins from './dashboard pages/Admins'
import Businesses from './dashboard pages/Businesses'
import Persons from './dashboard pages/Persons'
import Payments from './dashboard pages/Payments'
import BusinessRegistrationForm from './dashboard pages/BusinessRegistrationForm'
import Invoice from './dashboard pages/Invoice'
import InvoiceInfo from './invoice components/InvoiceInfo'
import { useDispatch } from 'react-redux';
import InvoiceSlice from './redux/InvoiceSlice'
import InvoiceCard from './invoice components/InvoiceCard'

const App = () => {
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(InvoiceSlice.actions.deleteInvoice({id : id }))
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/business-register' element={<BusinessRegister/>}/>
        <Route path='/person-register' element={<PersonRegister/>}/>
        <Route path='/password-reset' element={<PasswordReset/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/business-registration' element={<BusinessRegistration/>}/>
        <Route path='/dashboard/business-renewal' element={<BusinessRenewal/>}/>
        <Route path='/dashboard/labour-card' element={<LabourCard/>}/>
        <Route path='/dashboard/ejari-application' element={<EjariApplication/>}/>
        <Route path='/dashboard/offer-letter' element={<OfferLetter/>}/>
        <Route path='/dashboard/labour-insurance' element={<LabourInsurance/>}/>
        <Route path='/dashboard/labour-fee' element={<LabourFee/>}/>
        <Route path='/dashboard/entry-permit' element={<EntryPermit/>}/>
        <Route path='/dashboard/change-status' element={<ChangeStatus/>}/>
        <Route path='/dashboard/health-insurance' element={<HealthInsurance/>}/>
        <Route path='/dashboard/medical-examination-typing' element={<MedicalExaminationTyping/>}/>
        <Route path='/dashboard/emirates-id-typing' element={<EmiratesIDTyping/>}/>
        <Route path='/dashboard/stamping-visa' element={<StampingVisa/>}/>
        <Route path='/dashboard/final-contract-submission' element={<FinalContractSubmission/>}/>
        <Route path='/dashboard/transaction-list' element={<TransactionList/>}/>
        <Route path='/dashboard/top-up' element={<TopUp/>}/>
        <Route path='/dashboard/payments' element={<Payments/>}/>
        <Route path='/dashboard/form-fees' element={<FormFees/>}/>
        <Route path='/dashboard/agents' element={<Agents/>}/>
        <Route path='/dashboard/admins' element={<Admins/>}/>
        <Route path='/dashboard/businesses' element={<Businesses/>}/>
        <Route path='/dashboard/persons' element={<Persons/>}/>
        <Route path='/dashboard/business-registration-form' element={<BusinessRegistrationForm/>}/>
        <Route path='/dashboard/invoice-details' element={<Invoice/>}/>
        <Route path='/dashboard/invoice' element={<InvoiceInfo  onDelete={onDelete} />}/>
        <Route path='/dashboard/invoice-card' element={<InvoiceCard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
