//
//  ContentView.swift
//  Graph of Thoughts
//
//  Created by Vincent on 3/5/21.
//

import SwiftUI

struct ContentView: View {
    
    @State var thoughts = [Thought]()
    
    var body: some View {
        ZStack {
            Rectangle()
                .foregroundColor(Color(red: 40/255, green:  44/255, blue: 52/255))
                .ignoresSafeArea()
            VStack {
                ScrollView {
                    ForEach(thoughts) { thought in
                        CardedView(
                            title: thought.title,
                            content: thought.body,
                            imageURL: thought.imageURL)
                    }
                }
                
                Button {
                    loadAll()
                } label: {
                    Text("Reload")
                        .padding(10)
                        .background(Color.white)
                        .cornerRadius(buttonRadius)
                        .foregroundColor(.blue)
                }
            }
        }
        .onAppear(perform: loadAll)
    }
    
    func loadAll() {
        getRequest(
            uri: Env.apiEndPoint,
            headers: [
                "Authorization": Env.tokenAuth
            ]
        ) { (result: [Thought]) -> Void in
            thoughts = result
        }
    }
    
    
    let buttonRadius: CGFloat = 10
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
