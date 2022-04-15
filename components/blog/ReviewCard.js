import React from 'react'


function ReviewCard() {
    return (

        <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://media.istockphoto.com/photos/empty-studio-background-picture-id1022270894?k=20&m=1022270894&s=612x612&w=0&h=xI0yw0x8rZLsPFkaEL6WmGGSPRK4u8Jq3zUCY9QRgpM=" alt="Man looking at item at a store" />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                    <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard