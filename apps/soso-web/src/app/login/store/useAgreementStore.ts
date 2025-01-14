import { create } from 'zustand';

interface AgreementState {
  agreements: Record<string, boolean>;
  setAgreement: (id: string, value: boolean) => void;
  setAllAgreements: (value: boolean) => void;
}

export const useAgreementStore = create<AgreementState>((set) => ({
  agreements: {
    all: false,
    agree14: false,
    service: false,
    privacy: false,
    location: false,
  },
  setAgreement: (id, value) =>
    set((state) => ({
      agreements: { ...state.agreements, [id]: value },
    })),
  setAllAgreements: (value) =>
    set({
      agreements: {
        all: value,
        agree14: value,
        service: value,
        privacy: value,
        location: value,
      },
    }),
}));
