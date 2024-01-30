// MyModal.js
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Table from './table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MyModal({ isOpen, closeModal, id, name }) {

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-center min-h-screen">
      
            <Dialog.Panel className="w-11/12 transform bg-white rounded-2xl shadow-xl transition-all border-4 border-slate-300">
            <FontAwesomeIcon
            className='absolute top-5 left-5 cursor-pointer transform transition-transform hover:scale-115 hover:shadow-md'
            icon = {faXmark}
            size={'xl'}
            onClick={closeModal}
            />
              <Dialog.Title className="text-2xl mt-4 font-bold text-gray-900 text-center font-serif">
                {name}
              </Dialog.Title>
              <div className="mt-auto mb-6 text-center">
                <p className="text-sm text-gray-500">
                  2023 Pitch Metrics
                </p>
              </div>
              <Table id={id}></Table>
              
              <div className="mt-8">
        
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
