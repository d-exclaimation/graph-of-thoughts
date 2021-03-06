//
//  CardedView.swift
//  Graph of Thoughts
//
//  Created by Vincent on 3/6/21.
//

import SwiftUI

public struct CardedView: View {
    
    public var title: String
    public var content: String
    public var imageURL: String?
    public var height: CGFloat = 120
    public var width: CGFloat = 180
    
    public var body: some View {
        VStack {
            
            if imageURL != nil {
                Image()
            }
            
            Text(title)
                .font(.title)
                .padding(.bottom, spaceUpTitle)
            
            Text(content)
                .font(.body)
        }
        .frame(width: width, height: height, alignment: .center)
        .background(background)
        .cornerRadius(20)
        .padding()
        
    }
    
    let spaceUpTitle: CGFloat = 20
    let borderRadius: CGFloat = 10
    let backgroundColor: Color = .white
    var background: some View {
        backgroundColor
    }
}

struct CardedView_Previews: PreviewProvider {
    static var previews: some View {
        CardedView(title: "Test", content: "Hello World", imageURL: nil)
    }
}
