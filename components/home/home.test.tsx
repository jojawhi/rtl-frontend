/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Hero from '@/components/home/hero'
import IconSection from '@/components/home/icon-section'

describe("Homepage", () => {
    test("Hero component renders", () => {
        render(<Hero/>);
        expect(screen.getByTestId("home-hero-1")).toBeInTheDocument();
    })
    test("Icon section component renders", () => {
        render(<IconSection/>);
        expect(screen.getByTestId("home-icon-section-1")).toBeInTheDocument();
    })
    
})