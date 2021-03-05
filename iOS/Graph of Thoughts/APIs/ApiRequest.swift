//
//  ApiRequest.swift
//  Graph of Thoughts
//
//  Created by Vincent on 3/5/21.
//

import Foundation

public func getRequest<T: Codable>(uri: String, headers: [String: String]? = nil, callback: @escaping (T) -> Void) {
    guard let url = URL(string: uri) else {
        print("Invalid URL")
        return
    }
    
    // Make a request object
    var getRequest = URLRequest(url: url)
    
    // Set the method and headers
    getRequest.httpMethod = "GET"
    getRequest.allHTTPHeaderFields = headers
    
    URLSession.shared.dataTask(with: getRequest) { data, response, error in
        if let data = data {
            if let json = try? JSONDecoder().decode(T.self, from: data) {
                DispatchQueue.main.async {
                    callback(json)
                }
                return
            }
        }
    }.resume()
}
